import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'flowbite'

interface CoinData {
    id: string;
    name: string;
    symbol: string;
    current_price: number;
    price_change_24h: number;
    price_change_percentage_24h: number;
}

const FetchingTokenData: React.FC = () => {
    const [coins, setCoins] = useState<CoinData[]>([]);

    useEffect(() => {
        const tokenData = async () => {
            try {
                const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
                    params: {
                        vs_currency: 'usd',
                        order: 'market_cap_desc',
                        per_page: 10,
                        page: 1,
                        sparkline: false,
                        locale: 'en'
                    }
                })
                setCoins(response.data);
            } catch (error) {
                console.error(error);
            }
        }
        tokenData();
    }, []);

    return (
        <>
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Symbol
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Price
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Change 24h
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Change %
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {coins.map((coin) => (
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={coin.id}>
                            <td className="px-6 py-4">
                                {coin.name}
                            </td>
                            <td className="px-6 py-4">
                                {coin.symbol}
                            </td>
                            <td className="px-6 py-4">
                                {coin.current_price}
                            </td>
                            <td className="px-6 py-4">
                                {coin.price_change_24h}
                            </td>
                            <td className="px-6 py-4">
                                {coin.price_change_percentage_24h}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default FetchingTokenData;