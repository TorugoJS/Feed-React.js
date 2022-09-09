// importando
import {
    getAuth,
    createUserMithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut
} from 'firebase/auth'


//
import { useState, useEffect } from 'react';

// função do hook
// exportando
// autenticação
export const useAuthentication = () => {

    // 1º estágio de states
    const [error, setError] = useState(null) // erros
    const [loading, setLoading] = useState(null) // carregamento

    // cleanUp => não vai deixar resquicios de funções para não ter problema de memória
    // deal with memory leak
    // state para cancelamento
    const [cancelled, setCancelled] = useState(false) // iniciando como false

    // pegando autenticação do firebase
    const auth = getAuth()

    // criando um função para checar o state e reutilizar ela depois
    // se for true retorne
    // será o clearUp do vazamento de memória
    function checkIfIsCancelled() {
        if (cancelled) {
            return;
        }
    }
};