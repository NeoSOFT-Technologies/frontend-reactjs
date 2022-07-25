class AuthGuard {
  constructor(public errorComponent: any) {
    this.errorComponent = errorComponent;
  }

  public protect(component: any, isAuthenticated: any): any {
    const authenticationState = isAuthenticated;

    return authenticationState ? component : this.errorComponent;
  }
}

export default AuthGuard;
