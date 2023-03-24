import {Button, Card, Input, Link, Row, Spacer, Text, useInput} from '@nextui-org/react';
import {apiPost} from '@/api';
import {useRequest, useSetState} from 'ahooks';
import {useEffect, useMemo} from 'react';
import {validateEmail, validatePassword} from '@/defaults';

interface LoginPayload
{
    username: string;
    password: string;
}

export default () =>
{
    const [validForm, setValidForm] = useSetState({
        validEmail: false,
        validPassword: false
    });

    const {
        data,
        loading,
        error,
        run: doLogin
    } = useRequest((payload: LoginPayload) => apiPost('/login', payload), {manual: true});

    useEffect(() =>
    {
        if (data)
        {
            console.log(data);
        }
    }, [data]);

    useEffect(() =>
    {
        if (data)
        {
            console.log(data);
        }
    }, [error]);

    const {value: valueEmail, resetEmail, bindingsEmail} = useInput('');
    const {value: valuePassword, reset: resetPassword, bindings: bindingsPassword} = useInput('');

    const helperEmailValidation = useMemo((): Record<string, string> =>
    {
        if (!valueEmail)
        {
            return {
                text: '',
                color: ''
            };
        }

        const isValid = validateEmail(valueEmail);

        setValidForm({validEmail: Array.isArray(isValid)});

        return {
            text: isValid ? '' : 'Enter a valid email',
            color: isValid ? 'success' : 'error'
        };
    }, [valueEmail]);

    const helperPasswordValidation = useMemo((): Record<string, string> =>
    {
        if (!valuePassword)
        {
            return {
                text: '',
                color: ''
            };
        }

        const isValid = validatePassword(valuePassword);

        setValidForm({validPassword: Array.isArray(isValid)});

        return {
            text: isValid ? '' : 'Enter a valid password',
            color: isValid ? 'success' : 'error'
        };
    }, [valuePassword]);

    const handleLogin = () =>
    {
        console.log(validForm);

        console.log(valueEmail);
        console.log(valuePassword);

        // doLogin({
        //     username: value
        // });
    };

    return <>
        <Card className={'login'}>
            <Card.Body autoCapitalize={'off'}
                       autoCorrect={'off'}>
                <Text h2={true}>Login</Text>

                <Text>
                    Please authorize first to access the dashboard.
                </Text>

                <Spacer y={1}/>

                <Input {...bindingsEmail}
                       clearable={true}
                       onClearClick={resetEmail}
                       status={helperEmailValidation.color}
                       color={helperEmailValidation.color}
                       helperColor={helperEmailValidation.color}
                       helperText={helperEmailValidation.text}
                       type={'email'}
                       labelLeft={'Username:'}
                       placeholder={'Your Email'}/>

                <Spacer y={1}/>

                <Input {...bindingsPassword}
                       clearable={true}
                       onClearClick={resetPassword}
                       status={helperPasswordValidation.color}
                       color={helperPasswordValidation.color}
                       helperColor={helperPasswordValidation.color}
                       helperText={helperPasswordValidation.text}
                       placeholder={'Password'}
                       labelLeft={'Password:'}
                       type={'password'}/>
            </Card.Body>

            <Card.Divider/>

            <Card.Footer>
                <Row align={'center'}>
                    <Button color={'secondary'}
                            disabled={loading || !(validForm.validPassword && validForm.validEmail)}
                            ghost={!(validForm.validPassword && validForm.validEmail)}
                            onClick={() => handleLogin()}>Login</Button>

                    <Link css={{
                        ml: '1rem'
                    }}>Forgot password?</Link>
                </Row>
            </Card.Footer>
        </Card>
    </>;
};