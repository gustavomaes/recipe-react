import { createActions } from 'reduxsauce'

export const {
    Types,
    Creators
} = createActions({
    //Recipes
    getRecipesRequest: null,
    getRecipesSuccess: ['recipes'],
    getRecipesFailure: ['error'],

    getMyRecipesRequest: null,
    getMyRecipesSuccess: ['recipes'],
    getMyRecipesFailure: ['error'],

    getOneRecipeRequest: ['id'],
    getOneRecipeSuccess: ['recipe'],
    getOneRecipeFailure: ['error'],

    createRecipeRequest: ['data'],
    createRecipeSuccess: ['recipe'],
    createRecipeFailure: ['errors'],
    createRecipeReset: null,

    updateRecipeRequest: ['data'],
    updateRecipeSuccess: ['recipe'],
    updateRecipeFailure: ['errors'],

    deleteRecipeRequest: ['id'],
    deleteRecipeSuccess: ['id'],
    deleteRecipeFailure: ['errors'],

    fullRecipeReset: null,
    

    //Auth
    loginRequest: ['email', 'passwd'],
    loginSuccess: ['user'],
    loginFailure: ['error'],

    authRequest: null,
    authSuccess: ['user'],
    authFailure: null,

    destroyAuthRequest: null,
    destroyAuthSuccess: null,

    createUserRequest: ['data'],
    createUserSuccess: ['user'],
    createUserFailure: ['errors'],

    updateUser: ['user'],

    //User
    updateUserRequest: ['data'],
    updateUserSuccess: ['user'],
    updateUserFailure: ['error'],

    updateUserIdRequest: ['id', 'data'],
    updateUserIdSuccess: ['user'],
    updateUserIdFailure: ['error'],

    updatePasswdRequest: ['data'],
    updatePasswdSuccess: null,
    updatePasswdFailure: ['error'],

    getUsersRequest: null,
    getUsersSuccess: ['users'],
    getUsersFailure: ['error'],

    deleteUserRequest: ['id'],
    deleteUserSuccess: ['id'],
    deleteUserFailure: ['error'],

    getUserIdRequest: ['id'],
    getUserIdSuccess: ['user'],
    getUserIdFailure: ['error'],

    userReset: null
    

})

export default Creators