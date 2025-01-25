// import { HiChevronDown, HiChevronUp } from 'react-icons/hi2'

export default function Faqs() {
  return (
    <section>
      <h2 className='mb-24 mt-40 text-center text-3xl font-bold'>
        Frequently Asked Questions
      </h2>

      <div className='mx-auto w-[35vw]'>
        <Accordian label='How do you charge?'>
          Most of my Pricing is based on Hourly Rates. While, I am flexible to
          accept payments in milestone-basis or weekly basis. All rates are
          charged in any one of these currencies based on you location - USD,
          GBP, EUR, AUD, CAD, SGD, INR.
        </Accordian>
        <Accordian label='What timezones do you work in?'>
          I am flexible to work in any timezone. Based upon my ongoing projects,
          I shall convey my availability when we discuss the project proposal.
        </Accordian>
        <Accordian label='Who owns the code that you write?'>
          I push the code to the GitHub Repository you own. Publishing is
          configured with a CI/CD Pipeline wherever possible. Once the project
          is completed, all the intellectual rights and ownership shall be
          transferred to you.
        </Accordian>
        <Accordian label='Do you offer maintainence and post-project support?'>
          Yes! I offer maintainence and post-project support. I also offer a 30
          day warranty period for any bugs or issues that may arise after the
          project is completed.
        </Accordian>
        <Accordian label='Do you offer Confidentiality Contracts?'>
          Yes! I offer Contracts with specific clauses as per requirements. I am
          also open to signing an NDA if required. I understand the importance
          of Project Privacy and Confidentiality. I am open to discuss about
          this and include it in a contract that we both agree upon.
        </Accordian>
        <Accordian label='Do you work in teams? How do you collaborate?'>
          Communication and Collaboration: They might ask about the preferred
          communication channels, frequency of updates, and availability for
          meetings or discussions.
        </Accordian>
        <Accordian label='Can you scale if the requirements grow?'>
          Scalability and Flexibility: Questions about the developer's ability
          to scale the team if needed or adapt to changing project requirements.
        </Accordian>
      </div>
    </section>
  )
}

function Accordian(props: { label: string; children: React.ReactNode }) {
  return (
    <details className='group border-b-2 border-neutral-900 p-4'>
      <summary className='relative text-xl text-neutral-100'>
        {props.label}
        <HiChevronDown className='absolute right-1 top-2 ml-2 group-open:hidden' />
        <HiChevronUp className='absolute right-1 top-2 ml-2 hidden group-open:block' />
      </summary>
      <div className='py-4 text-lg text-neutral-300'>{props.children}</div>
    </details>
  )
}
