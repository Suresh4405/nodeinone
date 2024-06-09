import React, { useState } from 'react';
import { Form, Input, Select, Button, Row, Col, message } from 'antd';
import './contactus.css'; // Import custom CSS for styling

const { Option } = Select;

const countries = [
    { code: '+93', name: 'Afghanistan' },
    { code: '+355', name: 'Albania' },
    { code: '+213', name: 'Algeria' },
    { code: '+1684', name: 'American Samoa' },
    { code: '+376', name: 'Andorra' },
    { code: '+244', name: 'Angola' },
    { code: '+1264', name: 'Anguilla' },
    { code: '+1268', name: 'Antigua and Barbuda' },
    { code: '+54', name: 'Argentina' },
    { code: '+374', name: 'Armenia' },
    { code: '+297', name: 'Aruba' },
    { code: '+61', name: 'Australia' },
    { code: '+43', name: 'Austria' },
    { code: '+994', name: 'Azerbaijan' },
    { code: '+1242', name: 'Bahamas' },
    { code: '+973', name: 'Bahrain' },
    { code: '+880', name: 'Bangladesh' },
    { code: '+1246', name: 'Barbados' },
    { code: '+375', name: 'Belarus' },
    { code: '+32', name: 'Belgium' },
    { code: '+501', name: 'Belize' },
    { code: '+229', name: 'Benin' },
    { code: '+1441', name: 'Bermuda' },
    { code: '+975', name: 'Bhutan' },
    { code: '+591', name: 'Bolivia' },
    { code: '+387', name: 'Bosnia and Herzegovina' },
    { code: '+267', name: 'Botswana' },
    { code: '+55', name: 'Brazil' },
    { code: '+246', name: 'British Indian Ocean Territory' },
    { code: '+673', name: 'Brunei Darussalam' },
    { code: '+359', name: 'Bulgaria' },
    { code: '+226', name: 'Burkina Faso' },
    { code: '+257', name: 'Burundi' },
    { code: '+855', name: 'Cambodia' },
    { code: '+237', name: 'Cameroon' },
    { code: '+1', name: 'Canada' },
    { code: '+238', name: 'Cape Verde' },
    { code: '+1345', name: 'Cayman Islands' },
    { code: '+236', name: 'Central African Republic' },
    { code: '+235', name: 'Chad' },
    { code: '+56', name: 'Chile' },
    { code: '+86', name: 'China' },
    { code: '+61', name: 'Christmas Island' },
    { code: '+61', name: 'Cocos (Keeling) Islands' },
    { code: '+57', name: 'Colombia' },
    { code: '+269', name: 'Comoros' },
    { code: '+242', name: 'Congo' },
    { code: '+243', name: 'Congo, the Democratic Republic of the' },
    { code: '+682', name: 'Cook Islands' },
    { code: '+506', name: 'Costa Rica' },
    { code: '+225', name: 'Cote d\'Ivoire' },
    { code: '+385', name: 'Croatia' },
    { code: '+53', name: 'Cuba' },
    { code: '+357', name: 'Cyprus' },
    { code: '+420', name: 'Czech Republic' },
    { code: '+45', name: 'Denmark' },
    { code: '+253', name: 'Djibouti' },
    { code: '+1767', name: 'Dominica' },
    { code: '+1809', name: 'Dominican Republic' },
    { code: '+593', name: 'Ecuador' },
    { code: '+20', name: 'Egypt' },
    { code: '+503', name: 'El Salvador' },
    { code: '+240', name: 'Equatorial Guinea' },
    { code: '+291', name: 'Eritrea' },
    { code: '+372', name: 'Estonia' },
    { code: '+251', name: 'Ethiopia' },
    { code: '+500', name: 'Falkland Islands (Malvinas)' },
    { code: '+298', name: 'Faroe Islands' },
    { code: '+679', name: 'Fiji' },
    { code: '+358', name: 'Finland' },
    { code: '+33', name: 'France' },
    { code: '+594', name: 'French Guiana' },
    { code: '+689', name: 'French Polynesia' },
    { code: '+241', name: 'Gabon' },
    { code: '+220', name: 'Gambia' },
    { code: '+995', name: 'Georgia' },
    { code: '+49', name: 'Germany' },
    { code: '+233', name: 'Ghana' },
    { code: '+350', name: 'Gibraltar' },
    { code: '+30', name: 'Greece' },
    { code: '+299', name: 'Greenland' },
    { code: '+1473', name: 'Grenada' },
    { code: '+590', name: 'Guadeloupe' },
    { code: '+1671', name: 'Guam' },
    { code: '+502', name: 'Guatemala' },
    { code: '+224', name: 'Guinea' },
    { code: '+245', name: 'Guinea-Bissau' },
    { code: '+592', name: 'Guyana' },
    { code: '+509', name: 'Haiti' },
    { code: '+39', name: 'Holy See (Vatican City State)' },
    { code: '+504', name: 'Honduras' },
    { code: '+852', name: 'Hong Kong' },
    { code: '+36', name: 'Hungary' },
    { code: '+354', name: 'Iceland' },
    { code: '+91', name: 'India' },
    { code: '+62', name: 'Indonesia' },
    { code: '+98', name: 'Iran, Islamic Republic of' },
    { code: '+964', name: 'Iraq' },
    { code: '+353', name: 'Ireland' },
    { code: '+972', name: 'Israel' },
    { code: '+39', name: 'Italy' },
]  

const ContactUscomp = () => {
  const [form] = Form.useForm();
  const [selectedCountryCode, setSelectedCountryCode] = useState('');
  const [filteredCountries, setFilteredCountries] = useState(countries);

  const onFinish = (values) => {
    console.log('Form values:', values);
    message.success('Message sent successfully!');
    form.resetFields();
  };

  const handleCountryChange = (value) => {
    setSelectedCountryCode(value);
  };

  const handleSearch = (value) => {
    const filtered = countries.filter((country) =>
      country.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredCountries(filtered);
  };

  return (
    <div className='total-contact'>
        <div>
        <h1 className='Contacr-us'>CONTACT US</h1>
        <span className='Spam-questions'>Do You Have Any Questions?</span>
        </div>
    <div className="Contact-ted">
      <Form form={form} name="contactForm" onFinish={onFinish} layout="vertical">
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label={<span style={{color:"aliceblue"}}>Name</span>}
              name="name"
              rules={[{ required: true, message: 'Please enter your name' }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label={<span style={{color:"aliceblue"}}>Email</span>}
              name="email"
              rules={[
                { required: true, message: 'Please enter your email' },
                { type: 'email', message: 'Please enter a valid email' },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
  <Col span={12}>
    <Form.Item
      label={<span style={{ color: "aliceblue" }}>Country</span>}
      name="country"
      rules={[{ required: true, message: 'Please select your country' }]}
    >
      <Select 
        showSearch
        placeholder="Select country"
        optionFilterProp="children"
        onChange={handleCountryChange}
        onSearch={handleSearch}
        filterOption={false}
      >
        {filteredCountries.map((country) => (
          <Option key={country.code} value={country.code}>
            {country.name}
          </Option>
        ))}
      </Select>
    </Form.Item>
  </Col>
  <Col span={12}>
    <Form.Item
      label={<span style={{ color: "aliceblue" }}>Contact Number</span>}
      name="contactNumber"
      rules={[{ required: true, message: 'Please enter your phone number' }]}
    >
      <Input addonBefore={selectedCountryCode} style={{ backgroundColor:"aliceblue" }} />
    </Form.Item>
  </Col>
</Row>


        <Row gutter={18}>
          <Col span={12}>
            <Form.Item
              label={<span style={{color:"aliceblue"}}>Message</span>}
              name="message"
              rules={[{ required: true, message: 'Please enter your message' }]}
            >
              <Input.TextArea rows={7} />
            </Form.Item>
          </Col>
        </Row>

        <Row justify="end">
          <Col>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Send Message
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
    <div style={{marginBottom:"120px"}}></div>
    </div>
  );
};

export default ContactUscomp;
