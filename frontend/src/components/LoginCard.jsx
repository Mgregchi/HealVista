import { FloatingLabel, Form, Button } from 'react-bootstrap';


function LoginCard() {
  return (
    <>
      <h1>Login</h1>
      <p className=' addInfo '>Glad you are back!</p>
      <FloatingLabel
        controlId="floatingInput"
        label="Username"
        className="mb-3 label"
      >
        <Form.Control size='sm' className="input" type="email" placeholder="name@example.com" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Password" className='mb-3 label'>
        <Form.Control size='sm' className="input" type="password" placeholder="Password" />
      </FloatingLabel>
      <label>
        <input type="checkbox" name="remember" onChange />
        <span className=' addInfo '> Remember me</span>
      </label>
      <Button type="submit" className='submit mt-3 py-3'>Login</Button>
      <p className=" addInfo text-center mt-2">Forgot password?</p>
      <div className='text-center mt-5 mb-5'>
        <span className='icon'><img src='src/assets/devicon_google.svg' alt='Google'></img></span>
        <span className='icon mx-4'><img src='src/assets/logos_facebook.svg' alt='Facebook'></img></span>
        <span className='icon'><img src='src/assets/bi_github.svg' alt='Github'></img></span>
      </div>
      <div className='text-center mt-5 pt-5'>
        <p className='addInfo'>Don’t have an account? Signup</p>
        <p className='addInfo text-center'>
          <span>Terms & Conditions</span>
          <span className='mx-3'>Support</span>
          <span>Customer Care</span>
        </p>
      </div>
    </>
  );
}

export default LoginCard;