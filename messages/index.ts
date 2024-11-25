import { toast } from 'sonner';

class Notify {
	constructor() {}

	success(message: string) {
		toast.success(message);
	}

	error(error: any, fallback: string = 'Something went wrong') {
		if (typeof error === 'string') {
			toast.error(error);
		} else if (
			error.response &&
			error.response.data &&
			error.response.data.message &&
			typeof error.response.data.message === 'string'
		) {
			toast.error(error.response.data.message);
		} else if (error.message && typeof error.message === 'string') {
			toast.error(error.message);
		} else {
			toast.error(fallback);
		}
	}

	info(message: string) {
		toast.info(message);
	}

	warn(message: string) {
		toast.warning(message);
	}
}

const notify = new Notify();

export { notify };
