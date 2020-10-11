
import {driversConstant as c} from '../constants/drivers.constant';
import axios from 'axios';

export function driversActions(id){
    return (dispatch) =>{
        dispatch ({
            type: c.LOADING
        })
    const data={
        method: 'get',
        url: `/api/?results=30`,
    }
    axios.defaults.baseURL = `https://randomuser.me`;
    return axios(data)
            .then((res) => {
                    dispatch ({
                        type: c.SUCCESS,
                        payload: res.data.results
                    });
                }
            )
            .catch(error => {
                return dispatch({
                    type   : c.ERROR,
                    payload: error
                });
            });
        }
}
