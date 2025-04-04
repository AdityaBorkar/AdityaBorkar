class BauhausPattern {
	static get inputProperties() {
		return [
			'--pattern-seed',
			'--pattern-colors',
			'--pattern-size',
			'--pattern-detail',
		];
	}

	paint(ctx, geometry, properties) {
		const { width, height } = geometry;

		const patternSize =
			Number.parseInt(properties.get('--pattern-size').toString()) || 1024;
		const patternDetail =
			Number.parseInt(properties.get('--pattern-detail').toString()) || 16;
		const seed =
			Number.parseInt(properties.get('--pattern-seed').toString()) || 1000;
		const colors = properties
			.getAll('--pattern-colors')
			.map((c) => c.toString());

		// Simple random function based on seed
		const random = {
			seed: seed,
			next() {
				this.seed = (this.seed * 9301 + 49297) % 233280;
				return this.seed / 233280;
			},
			int(min, max) {
				return Math.floor(this.next() * (max - min + 1) + min);
			},
		};

		this.scaleCtx(ctx, patternSize, patternSize, width, height);

		const cellSize = patternSize / patternDetail;

		for (let x = 0; x < patternSize; x += cellSize) {
			for (let y = 0; y < patternSize; y += cellSize) {
				const color = colors[random.int(0, colors.length - 1)];
				ctx.fillStyle = color;

				const cx = x + cellSize / 2;
				const cy = y + cellSize / 2;

				const shapeChoice = ['circle', 'arc', 'rectangle', 'triangle'][
					random.int(0, 3)
				];

				const rotationDegrees = [0, 90, 180][random.int(0, 2)];

				ctx.save();

				ctx.translate(cx, cy);
				ctx.rotate((rotationDegrees * Math.PI) / 180);
				ctx.translate(-cx, -cy);

				switch (shapeChoice) {
					case 'circle':
						this.drawCircle(ctx, cx, cy, cellSize / 2);
						break;
					case 'arc':
						this.drawArc(ctx, cx, cy, cellSize / 2);
						break;
					case 'rectangle':
						this.drawRectangle(ctx, cx, cy, cellSize);
						break;
					case 'triangle':
						this.drawTriangle(ctx, cx, cy, cellSize);
						break;
				}

				ctx.fill();

				ctx.restore();
			}
		}
	}

	scaleCtx(ctx, width, height, elementWidth, elementHeight) {
		const ratio = Math.max(elementWidth / width, elementHeight / height);
		const centerShiftX = (elementWidth - width * ratio) / 2;
		const centerShiftY = (elementHeight - height * ratio) / 2;

		ctx.setTransform(ratio, 0, 0, ratio, centerShiftX, centerShiftY);
	}

	drawCircle(ctx, cx, cy, radius) {
		ctx.beginPath();
		ctx.arc(cx, cy, radius, 0, Math.PI * 2);
		ctx.closePath();
	}

	drawArc(ctx, cx, cy, radius) {
		ctx.beginPath();
		ctx.arc(cx, cy, radius, 0, Math.PI * 1);
		ctx.closePath();
	}

	drawRectangle(ctx, cx, cy, size) {
		ctx.beginPath();
		ctx.rect(cx - size / 2, cy - size / 2, size, size);
		ctx.closePath();
	}

	drawTriangle(ctx, cx, cy, size) {
		const originX = cx - size / 2;
		const originY = cy - size / 2;

		ctx.beginPath();
		ctx.moveTo(originX, originY);
		ctx.lineTo(originX + size, originY + size);
		ctx.lineTo(originX, originY + size);
		ctx.closePath();
	}
}

registerPaint('bauhausPattern', BauhausPattern);
