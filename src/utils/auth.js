
export function getTokenDuration() {
    const storedExpirationDate = localStorage.getItem("expiration");

    if (storedExpirationDate === null){
        return 0;
    }

    const expirationDate = new Date(storedExpirationDate);
    const now = new Date();
    const duration = expirationDate.getTime() - now.getTime();
    return duration;
}

export function getAuthToken() {
    const token = localStorage.getItem("token");
    return token;
}

export function tokenLoader() {
    
    const tokenDuration = getTokenDuration();
    console.log(tokenDuration);
    const is_expired = tokenDuration <= 0;
    const username = localStorage.getItem("username")

    return {
        token: getAuthToken(),
        is_expired: is_expired,
        username: username
    }
}
