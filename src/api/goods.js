import gate from '@/api/axios';

const URL = '';

export const goodsAction = async (payload) => gate.post(URL, payload);