import jsonRestProvider from 'ra-data-fakerest';
import data from '../mocks/data';

const disableFakeFetchRequestsLogs = true;

export default jsonRestProvider(data, disableFakeFetchRequestsLogs);