class AuthGuard {
  constructor(public errorComponent: any) {
    this.errorComponent = errorComponent;
  }

  protect = (component: any, isAuthenticated: any) => {
    const authenticationState = isAuthenticated;

    return authenticationState ? component : this.errorComponent;
  };
}

export default AuthGuard;
