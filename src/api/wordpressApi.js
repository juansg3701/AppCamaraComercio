import {apiwp} from "./index";
import Base64 from 'crypto-js/enc-base64';
import {strategy} from "workbox-streams";
//import aesjs from 'aes-js';
//import pkcs7 from 'pkcs7';
const CryptoJS = require("crypto-js");

export default class wordpressApi {

    static getCapa(){
        return apiwp.get('posts/').
        then((resp)=>resp.data).catch((error)=>error.message);
    }

    static getImage(number){
        return apiwp.get(`media/${number}`).
        then((resp)=>resp.data).catch((error)=>error.message);
    }

    static encriptado(clave){
        /*
        Prueba php
        $action="encrypt";
$secret_key="aaaaaaaaaaaaaaaa";
$secret_iv="1234567890123456";
$string="texttexttexttext";

        $output = false;
        $encrypt_method = "AES-256-CBC";
        $key = hash('sha256', $secret_key);
        $iv = substr(hash('sha256', $secret_iv), 0, 16);
        if ($action == 'encrypt') {
            $output = openssl_encrypt($string, $encrypt_method, $key, 0, $iv);
            $output = base64_encode($output);
        } else if ($action == 'decrypt') {
            $output = openssl_decrypt(base64_decode($string), $encrypt_method, $key, 0, $iv);
        }
        echo $output;
         */

        let secret_key = 'c0nf3c4m4r4s';
        let secret_iv = 'c0nf3c4m4r4s';
        const dato=clave;

       let key = CryptoJS.SHA256(secret_key).toString();
       let iv = CryptoJS.SHA256(secret_iv).toString().substr(0, 16);

        key = CryptoJS.enc.Utf8.parse(key.substr(0, 32));
        iv = CryptoJS.enc.Utf8.parse(iv);

        var encrypted = CryptoJS.AES.encrypt(dato, key, {iv: iv});

        var rawStr = encrypted.toString();
        var wordArray = CryptoJS.enc.Utf8.parse(rawStr);
        var base64 = CryptoJS.enc.Base64.stringify(wordArray);
        console.log(base64);

        return base64;
        //decrypt base64 es la contraseña encriptada
        //var parsedWordArray = CryptoJS.enc.Base64.parse(base64);
        //var parsedStr = parsedWordArray.toString(CryptoJS.enc.Utf8);
        //console.log("parsed:",parsedStr);

        //desencriptado    https://programmerclick.com/article/75281328671/
       // let result = CryptoJS.AES.encrypt(message, key);
        //let base64Result = CryptoJS.enc.Base64.stringify(CryptoJS.DES.decrypt(result, key));
        //console.log(base64Result);

    }
    /*

    function MyComponent() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch("https://api.example.com/items")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.name} {item.price}
          </li>
        ))}
      </ul>
    );
  }
}
     */
}
