/**
 * Класс LoginForm управляет формой
 * входа в портал
 * Наследуется от AsyncForm
 * */
class LoginForm {
  /**
   * Производит авторизацию с помощью User.login
   * После успешной авторизации, сбрасывает форму,
   * устанавливает состояние App.setState( 'user-logged' ) и
   * закрывает окно, в котором находится форма
   * */
  onSubmit( options ) {
    User.login(options, (err, response) => {
      let modal = App.getModal("login");
      modal.close();
      App.setState('user-logged');
     });
  }
}
