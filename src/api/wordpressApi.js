import {apiwp} from "./index";
import {strategy} from "workbox-streams";

export default class wordpressApi {

    static getCapa(){
        return apiwp.get('posts/').
        then((resp)=>resp.data).catch((error)=>error.message);
    }

    static getImage(number){
        return apiwp.get(`media/${number}`).
        then((resp)=>resp.data).catch((error)=>error.message);
    }

    static encriptado(){
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
        /*
        var aesjs = require("aes-js");
var base64 = require("js-base64");
var pkcs7 = require("pkcs7");

var iv = aesjs.utils.utf8.toBytes("1234567890123456");
var key = aesjs.utils.utf8.toBytes("aaaaaaaaaaaaaaaa");
var text = aesjs.utils.utf8.toBytes("texttexttexttext");

var aesCbc = new aesjs.ModeOfOperation.cbc(key, iv);
var encryptedBytes = aesCbc.encrypt(pkcs7.pad(text));

var hex = aesjs.utils.hex.fromBytes(encryptedBytes);
var buf = Buffer.from(hex, 'hex');

console.log(buf.toString('base64'));
// output: 'rAI8n0cKtwiu1N5hfDWs3rPbz0UmvlbW+LJliYox03c='

         */
        var aesjs = require("aes-js");
        var base64 = require("js-base64");
        var pkcs7 = require("pkcs7");

        var iv = aesjs.utils.utf8.toBytes("1234567890123456");
        var key = aesjs.utils.utf8.toBytes("aaaaaaaaaaaaaaaa");
        var text = aesjs.utils.utf8.toBytes("texttexttexttext");

        var aesCbc = new aesjs.ModeOfOperation.cbc(key, iv);
        var encryptedBytes = aesCbc.encrypt(pkcs7.pad(text));

        var hex = aesjs.utils.hex.fromBytes(encryptedBytes);
        var buf = Buffer.from(hex, 'hex');

        console.log(buf.toString('base64'));

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
