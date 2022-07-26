class AuthGuard {
  constructor(public errorComponent: any) {
    this.errorComponent = errorComponent;
  }

  public protect(
    component: JSX.Element | null,
    isAuthenticated: any
  ): JSX.Element | null {
    const authenticationState = isAuthenticated;
    return authenticationState ? component : this.errorComponent;
  }
}

export default AuthGuard;
