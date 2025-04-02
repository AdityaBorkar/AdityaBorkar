import type { calendar_v3 } from '@googleapis/calendar';
import { CONTACT_FORM_ETA } from 'cms/constants';
import { google } from 'googleapis';
import serviceAccount from '@/../gcloud-service-account-key.json';

const CALENDAR_ID = 'aditya.borkar.programs@gmail.com';

export async function getResponseEta() {
	const now = new Date();
	const today = new Date(now.setHours(0, 0, 0, 0)).valueOf();
	const tomorrow = new Date(now.setHours(24, 0, 0, 0)).valueOf();
	const query: calendar_v3.Params$Resource$Freebusy$Query = {
		requestBody: {
			timeMin: new Date(today).toISOString(),
			timeMax: new Date(tomorrow).toISOString(),
			items: [{ id: CALENDAR_ID }],
		},
	};

	const auth = new google.auth.GoogleAuth({
		credentials: serviceAccount,
		scopes: ['https://www.googleapis.com/auth/calendar.freebusy'],
	});
	const calendar = google.calendar({ version: 'v3', auth });
	const response = await calendar.freebusy
		.query(query)
		.then((res: { data: calendar_v3.Schema$FreeBusyResponse }) => res.data)
		.catch((err: Error) => {
			console.error(err);
			return null;
		});

	const events = response?.calendars?.[CALENDAR_ID]?.busy || [];
	const isBusy = events.length > 0;
	const isBusyAllDay = events.some((event) => {
		const start = event.start ? new Date(event.start).valueOf() : 0;
		const end = event.end ? new Date(event.end).valueOf() : 0;
		return start === today && end === tomorrow;
	});

	if (isBusyAllDay) return CONTACT_FORM_ETA.ETA.OOO_OUTSTATION;
	if (isBusy) return CONTACT_FORM_ETA.ETA.OOO_INSTATION;

	const isWorkingHours =
		now.getHours() >= CONTACT_FORM_ETA.DEFINITIONS.WORKING_HOURS_START &&
		now.getHours() <= CONTACT_FORM_ETA.DEFINITIONS.WORKING_HOURS_END;
	return isWorkingHours
		? CONTACT_FORM_ETA.ETA.WORKING_HOURS
		: CONTACT_FORM_ETA.ETA.NON_WORKING_HOURS;
}
