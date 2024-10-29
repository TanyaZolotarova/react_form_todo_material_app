import {TitleTextComponent} from "../UI/TitleTextComponent";
import {FieldsetComponent} from "./Components/FieldsetComponent";
import {ButtonComponent} from "./Components/ButtonComponent";
import './FormLogin.css';
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router";
import {useState} from "react";

export function FormLoginComponent() {
    const [error, setError] = useState(null);

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm();
    const navigate = useNavigate();

    const onSubmit = (data) => {
        try {
            console.log("Form data:", data);
            navigate("/todo");
        } catch (e) {
            if (e.response && e.response.status === 401) {
                setError("Неверные учетные данные. Попробуйте еще раз.");
            } else {
                setError("Не удалось выполнить вход. Пожалуйста, попробуйте еще раз.");
            }
        }
    };

    return (
        <div className='wrapper'>
            <div className='container'>
                <TitleTextComponent title="Login"/>
                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                    <FieldsetComponent
                        id="email"
                        autoComplete="email"
                        label="Email Address"
                        name="email"
                        type="email"
                        {...register("email", {
                            required: "Email обязателен",
                            pattern: {
                                value: /^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/,
                                message: "Неверный формат email (должен содержать @ и точку)"
                            },
                        })}
                    />
                    {errors.email && <p className='error'>{errors.email.message}</p>}

                    <FieldsetComponent
                        id="password"
                        autoComplete="current-password"
                        label="Password"
                        name="password"
                        type="password"
                        {...register("password", {
                            required: "Пароль обязателен",
                            minLength: {
                                value: 8,
                                message: "Пароль должен быть не меньше 8 символов",
                            },
                            validate: {
                                hasUpperCase: (value) =>
                                    /[A-ZА-ЯЁ]/.test(value) || "Пароль должен содержать хотя бы одну большую букву",
                            },
                        })}
                    />
                    {errors.password && <p className='error'>{errors.password.message}</p>}
                    <ButtonComponent/>
                    {error && <h4 className="error">Error: {error}</h4>}
                </form>
            </div>
        </div>
    );
}
