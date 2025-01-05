import { appUrl } from '@/config';
import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

type ApiResult<T> = {
	data?: T;
	error?: {
		message: string;
		status: number;
	};
};

class ApiClient {
	private client: AxiosInstance;

	constructor() {
		this.client = axios.create({
			baseURL: appUrl,
			headers: {
				'Content-Type': 'application/json',
			},
		});
	}

	private async request<T>(config: AxiosRequestConfig): Promise<ApiResult<T>> {
		try {
			const response: AxiosResponse<T> = await this.client.request(config);
			return { data: response.data };
		} catch (err) {
			const error = err as AxiosError;
			return {
				error: {
					message: error.message,
					status: error.response?.status || 500,
				},
			};
		}
	}

	async get<T>(url: string, params?: Record<string, unknown>): Promise<ApiResult<T>> {
		return this.request<T>({ method: 'GET', url, params });
	}

	async post<T, D = unknown>(url: string, data?: D): Promise<ApiResult<T>> {
		return this.request<T>({ method: 'POST', url, data });
	}

	async put<T, D = unknown>(url: string, data?: D): Promise<ApiResult<T>> {
		return this.request<T>({ method: 'PUT', url, data });
	}

	async patch<T, D = unknown>(url: string, data?: D): Promise<ApiResult<T>> {
		return this.request<T>({ method: 'PATCH', url, data });
	}

	async delete<T>(url: string): Promise<ApiResult<T>> {
		return this.request<T>({ method: 'DELETE', url });
	}
}

export const apiClient = new ApiClient();
