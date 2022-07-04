import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';

import { doc, getDoc } from 'firebase/firestore';
import { collectionProd } from '../../../api/firebase/firebase';


const ItemDetailContainer = () => {

    const [item, setItem] = useState({});
    const {id} = useParams();
    // const idToNumber = parseInt(id);
    useEffect(() => {

        const ref = doc(collectionProd, id);
        getDoc(ref).then((response) => {
            setItem({
                id: response.id,
                ...response.data(),
            });
        });

    },[id])

  return (
        <ItemDetail item={item} />
  )
}

export default ItemDetailContainer