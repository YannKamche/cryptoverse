import React, { useEffect, useState } from 'react'
import millify from 'millify'
import { Link } from 'react-router-dom'
import { Card, Row, Col, Input } from 'antd'

import { useGetCryptosQuery } from '../services/cryptoApi'

const Cryptocurrencies = ({ simplified }) => {
  //count variable
  const count = simplified ? 10 : 100;

  //fetch the data
  const { data: cryptosList, isFetching } = useGetCryptosQuery(count);

  //Manages the state of the fetched data
  const [cryptos, setCryptos] = useState([]); //We leave the initial state as an empty array because of the useEffect

  //Manages the state of the input field
  const [searchTerm, setSearchTerm] = useState("");

  /*useEffect hook to manage the rendering. It is a combination of the componentDidMount (happening at the start) and componentDidUpdate 
  (for the two properties in the array passed as second argument) to the useEffect hook */
  useEffect(() => {
    const filteredData = cryptosList?.data?.coins.filter((coin) =>
      coin.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setCryptos(filteredData);
  }, [cryptosList, searchTerm]); //Only re-renders when any of the two items in the array change

  if (isFetching) return "Loading ...";
  return (
    <>
      {/* Input field to filter out crypto currencies */}
      {!simplified && (
        <div className="search-crypto">
          <Input
            placeholder="Search Cryptocurrency"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      )}
      <Row gutter={[16, 16]} className="crypto-card-container">
        {cryptos?.map((currency) => (
          <Col xs={24} sm={12} lg={6} className="crypto-card" key={currency.id}>
            <Link to={`/crypto/${currency.id}`}>
              <Card
                title={`${currency.rank}. ${currency.name}`}
                extra={<img className="crypto-image" src={currency.iconUrl} />}
                hoverable
              >
                <p>Price: {millify(currency.price)}</p>
                <p>Market: {millify(currency.marketCap)}</p>
                <p>Daily Change: {millify(currency.change)}%</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default Cryptocurrencies
