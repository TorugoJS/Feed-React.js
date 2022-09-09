// importando
import {
    getAuth,
    createUserMithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut
} from 'firebase/auth'


//
import {useState, useEffect} from 'react';

//função do hook
//exportando
//autenticação
export const useAuthentication = () => {
    //1º estágio
    const [error, setError] = useState(null) // erros
    const [loading, setLoading] = useState(null) // carregamento

    // cleanUp => não vai deixar resquicios de funções para não ter problema de memória
    // deal with memory leak

    const [cancelled, setCancelled] = useState(false) // iniciando como false


}