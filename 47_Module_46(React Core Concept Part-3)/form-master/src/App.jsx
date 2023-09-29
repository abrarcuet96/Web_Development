import './App.css'
import Grandpa from './components/Grandpa/Grandpa'
// import RefForm from './RefForm/RefForm'
// import SimpleForm from './SimpleForm/SimpleForm'
// import StateFullForm from './StateFullForm/StateFullForm'
// import HookForm from './components/HookForm/HookForm'
// import ReUsableForm from './components/ReUsableForm/ReUsableForm'

function App() {
//   const handleSignUpSubmit = data => {
//     console.log(data);
//   }
//   const handleUpdateProfile = data => {
//     console.log(data);
//   }
  return (
    <>

      <h1>Form Master</h1>
      <Grandpa></Grandpa>
      {/* <SimpleForm></SimpleForm>
       */}
      {/* <StateFullForm></StateFullForm> */}
      {/* <RefForm></RefForm>
        */}
      {/* <HookForm></HookForm> */}
      {/* <ReUsableForm 
      formTitle='Sign Up' 
      handleSubmit={ handleSignUpSubmit}>
        <div>
          <h2>Sign Up</h2>
          <p>Please sign up right now</p>
        </div>
      </ReUsableForm>
      <ReUsableForm 
      formTitle='Profile Update' 
      handleSubmit={handleUpdateProfile} 
      submitBtnText='Update'>
        <div>
          <h2>Update Profile</h2>
          <p>Always keep your file updated</p>
        </div>
      </ReUsableForm> */}
    </>
  )
}

export default App
