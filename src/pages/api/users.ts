import {NextApiRequest, NextApiResponse} from 'next'
export default (resquest:NextApiRequest, response:NextApiResponse) => {
    const users=[
        {id:1, name: 'Bruno'},
        {id:2, name: 'Bia'},
        {id:3, name: 'Derek'},
    ];

    return response.json(users)
}