
// importando do firebase
import {
    getAuth,
    createUserWithEmailAndPassword,
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
    // será o cleanUp do vazamento de memória
    function checkIfIsCancelled() {
        if (cancelled) {
            return;
        }
    }

    // register
    // criando usuário 
    // usuário indo para um banco de dados externo
    const createUser = async (data) => {

        //checando se está cancelado
        checkIfIsCancelled()

        // se tiver tudo certo, loading...
        setLoading(true)

        //limpando erro
        setError(null)



        // tratando erros
        try {
            // pegando usuário dos dados
            const { user } = await createUserWithEmailAndPassword(
                auth,
                data.email,
                data.password
            )

            // fazendp um update
            await updateProfile(user, {
                displayName: data.displayName
            })

            // setando loading pós envio
            setLoading(false)

            //retorne o usuário
            return user;
        }
        catch (error) {

            //imprimindo erro
            console.log(error.message)
            console.log(typeof error.message)

            // manipulando erros para imprimir em pt-br
            // checando com if e imprimindo erros baseados na condição
            let systemErrorMessage;

            if (error.message.includes("Password")) {
                systemErrorMessage = "A senha precisa conter 6 dígitos!"
            } else if (error.message.includes("email-already")) {
                systemErrorMessage = "Email já cadastrado."
            } else {
                systemErrorMessage = "Ocorreu um erro, tente mais tarde";
            }

            setLoading(false);
            setError(systemErrorMessage);
        }


    };

    //logout - sign out
    // deslogando
    const logout = () => {

        checkIfIsCancelled()

        signOut(auth)
    }

    //login do usuario - sign in
    const login = async (data) => {

        checkIfIsCancelled()

        setLoading(true)
        setError(false)


        // tratando erros
        try {

            await signInWithEmailAndPassword(auth, data.email, data.password)
        
            setLoading(false);

        } catch (error) {

            let systemErrorMessage;


            //manipulando erros
            if (error.message.includes("user-not-found")) {
                systemErrorMessage = "Usuário não encontrado"

            } else if (error.message.includes("wrong-password")) {
                systemErrorMessage = "Senha incorreta"
            } else {
                systemErrorMessage = "Ocorreu um erro, tente mais tarde"
            }

            setError(systemErrorMessage)
            // setando loading pós login
            setLoading(false)

        }

    }


    // executando apenas uma vez ao sair da página
    useEffect(() => {
        return () => setCancelled(true)
    }, []);

    // retorno do que foi criado a cima
    return {
        auth,
        createUser,
        error,
        loading,
        logout,
        login
    }
};