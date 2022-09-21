import { useState, useEffect } from 'react';
import { db } from "../firebase/config";
import {
    collection, // coleção
    query, // pegar o dado
    orderBy, // ordenação
    onSnapshot,
    where // filtro dos detalhes que estão vindo
} from 'firebase/firestore';

export const useFetchDocuments = (docCollection, search = null, uid = null) => {

    const [documents, setDocuments] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);


    // deal with memory leak
    const [cancelled, setCancelled] = useState(false)

    useEffect(() => {

        async function loadData() {
            if (cancelled) return;

            setLoading(true)

            const collectionRef = await collection(db, docCollection)

            try {
                // criando a busca de dados
                let q;

                //busca
                //dashboard

                q = await query(collectionRef, orderBy("createAt", "desc"));

                await onSnapshot(q, (querySnapshot) => {
                    setDocuments(
                        querySnapshot.docs.map((doc) => ({
                            id: doc.id,
                            ...doc.data(),
                        }))
                    )
                });

                setLoading(false);

            } catch (error) {
                console.log(error)
                setError(error.message)

                setLoading(false);
            }

        }

        loadData();
    }, [docCollection, search, uid, cancelled]);

    useEffect(() => {
        return () => setCancelled(true)
    }, []);

    return {documents, loading, error};

};