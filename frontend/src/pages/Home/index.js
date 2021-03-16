import React, { useState } from 'react';
import { PageArea, Container } from './styled';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { useParams } from 'react-router-dom';

// Animations
import { AnimatePresence } from 'framer-motion';
import { PageAnimation } from '../../animations';

// Components
import ProductModal from '../../components/ProductModal';
import Products from '../../components/ProductsList';
import Pagination from '../../components/Pagination';
import { perPage } from '../../config';

const Home = ({ page }) => {
    // States
    const [modalData, setModalData] = useState({});
    const [showDetail, setShowDetail] = useState(false);


    return (
            <PageArea
              variants={PageAnimation}
              initial={false}
              exit='exit'>
                <Container>
                    <Pagination page={ page || 1} />
                    <Products
                        page={ page || 1}
                        setShowDetail={setShowDetail} 
                        setModalData={setModalData} 
                        />
                    <Pagination page={ page || 1} />
                </Container>
                <AnimatePresence exitBeforeEnter>
                 { showDetail && 
                    <ProductModal setShowDetail={setShowDetail} data={modalData} />}
                </AnimatePresence>
            </PageArea>
    )
}

export default Home;
