import "./LoginPanel.css";

function LoginPanel() {
	return (
		<div className="login-container">
			<div className="login-frame">
				<img src="" alt="Logo" />
				<label className="form-label" htmlFor="">
					Usuario
				</label>
				<input className="form-input" type="text" />
				<label className="form-label" htmlFor="">
					Contraseña
				</label>
				<input className="form-input" type="text" />
				<button className="form-button" type="submit">
					Ingresar
				</button>
			</div>
		</div>
	);
}

export default LoginPanel;
