export const safeParse = <T>(parse: (_: any) => T, input: any): T => {
	try {
		const output = parse(input);
		return output;
	} catch {
		// return null;
		throw new Error(`Invalid input: ${input}`);
	}
};

export const getString = (input: any): string => {
	// TODO: Replace with zod
	if (typeof input != 'string') {
		throw new Error(`${input} of type ${typeof input} is not a valid string!`);
	}
	return input;
};

export const getNonEmptyString = (input: any): string => {
	const output = getString(input);
	if (output === '') {
		throw new Error(`${input} is an empty string!`);
	}
	return output;
};

export const getNumber = (input: any): number => {
	if (typeof input !== 'string' && typeof input !== 'number') {
		throw new Error(`${input} of type ${typeof input} is not a valid number!`);
	}
	const int = Number(`${input}`);

	if (isNaN(int)) {
		throw new Error(`${input} of type ${typeof input} is not a valid number!`);
	}

	return int;
};

export const getNonNegativeNumber = (input: any): number => {
	const int = getNumber(input);

	if (int < 0) {
		throw new Error(`${int} is not a non-negative number!`);
	}

	return int;
};

export const getBoolean = (input: any): boolean => {
	if (
		typeof input !== 'boolean' ||
		(typeof input === 'string' && input !== 'true' && input !== 'false') ||
		(typeof input === 'number' && input !== 0 && input !== 1)
	) {
		throw new Error(`${input} of type ${typeof input} is not a valid boolean!`);
	}

	if (typeof input === 'string') {
		return input === 'true';
	} else if (typeof input === 'number') {
		return input === 0 ? false : true;
	} else {
		return input;
	}
};

export const getArray = <T>(input: any): T[] => {
	if (!Array.isArray(input)) {
		throw new Error(`${input} of type ${typeof input} is not a valid array!`);
	}

	return input;
};

export const getSingletonValue = <T>(input: T[]): T => {
	if (input.length !== 1) {
		throw new Error(`${input} is not a singleton array!`);
	}

	return input[0];
};

export const getNonNullValue = <T>(input: T | null): T => {
	if (input === null || input === undefined) {
		throw new Error(`${input} is null!`);
	}

	return input;
};
