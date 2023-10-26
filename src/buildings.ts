import axios from 'axios';
import fs from 'fs';
import urls from './urls.json';

export default async function buildings() {
    const data = (
        await axios.get(urls.buildings, {
            params: {
                f: 'json',
                where: '(1 = 1)',
                outFields: '*',
            },
        })
    ).data;

    await fs.promises.writeFile(
        'data.json',
        JSON.stringify(data, null, 4),
        'utf-8',
    );
}
