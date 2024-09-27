import React, {useState} from 'react';
import './mcFormStyles.scss';
import MailchimpSubscribe from "react-mailchimp-subscribe";
import InputField from "../../ui/InputField/InputField";

const CustomForm = ({ status, message, onValidated }) => {

    const [email, setEmail] = useState('');
   
    const handleSubmit = (e) => {
        e.preventDefault();
        email &&
        firstName &&
        lastName &&
        email.indexOf("@") > -1 &&
        onValidated({
            EMAIL: email,
            MERGE1: firstName,
            MERGE2: lastName,
        });
    }

    return (
      <form className="mc__form">
        <h3 className="mc__title">Join our email list for future updates.</h3>
        <div className="mc__field-container">
         

          

          <InputField
            label="Email"
            onChangeHandler={setEmail}
            type="email"
            value={email}
            placeholder="your@email.com"
            isRequired
          />

        </div>

        <InputField
          label="subscribe"
          type="submit"
          formValues={[email]}
        />
      </form>
    );
}