import { methodService, apiService } from './postalCodeService';

export const URL = {
  BASE_POSTALCODE: '/postalcodes',
}

export function apiPostalCode(data) {
  return apiService(
    URL.BASE_POSTALCODE+`/${data?.postalCode}`,
    methodService.GET,
    null,
    null
  );
}