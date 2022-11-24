## react-appointment-system testing server

- Simple Node.js server made for [react-appointment-system](https://github.com/Hnes-co/appointment-system)
- Uses express and mongoose
- Nodemailer for sending appointment confirmation emails 

### Usage

```bash
> git clone https://github.com/Hnes-co/appointment-system-backend.git
> cd appointment-system-backend 
> npm install
```

### About the email service

If you use this server and the nodemailer for sending emails,
create 'email-credentials.json' file with following content:

`
{
  "email": "your-email-here",
  "password": "your-password-here"
}
`
### License

MIT @ [hnes-co](https://github.com/Hnes-co)
