import { useState, useEffect } from 'react'
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { db } from '../services/db';

export default function useFirestore(collectionParam, condition) {
  const [document, setDocument] = useState();
  useEffect(() => {
    if (collectionParam == undefined){
      setDocument([]);
      return document;
    }
    let collectionRef = collection(db, collectionParam);
    if (!condition) {
      if (!condition.compareValue || condition.compareValue.length)
        setDocument([]);
      return;
    }
    var q = {};
    try {
      q = query(collectionRef, where(condition.fieldName, condition.operator, condition.compareValue));
    } catch (error) {
      setDocument([]);
      // console.log(error);
      return;
    }
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      var documents = {};
      querySnapshot.forEach(doc => {
        documents = {
          ...doc.data(),
        }
      })
      setDocument(documents);
    });
    return () => {
      unsubscribe();
    }
  }, [collectionParam, condition])
  return document;
}
