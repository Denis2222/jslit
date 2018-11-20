import { html, render } from './node_modules/lit-html/lit-html.js';

const URL = (proto, ip, port) => html`${proto}192.168.1.${ip}:${port}`;


const R1 = 'http://192.168.1.135:5000';
const R2 = 'http://192.168.1.136:5000';
const R3 = 'http://192.168.1.137:5000';


const link = (who, what, title) => html`
    <button class="btn btn-outline-primary btn-sm" href="${who}/play/${what}">${title}</button>
`;

const items = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];
const linkR2scores = [];
for (const x of items) {
  linkR2scores.push(html`${link(R2, 'marteau/score' + x, x * 739)}`);
}

const linkR3scores = [];
for (const x of items) {
  linkR2scores.push(html`${link(R3, 'marteau/score' + x, x * 739)}`);
}


const helloTemplate = (data) => html`

  <table border="1">
  <tr>
      <td>Palais des glaces gauche</t--disable-web-securityd>
      <td>Double</td>
      <td>Palais des glaces droite</td>
      <td>SALE PRINCIPALE</td>
  </tr>
  <tr>
    <td>
      ${link(R2, 1, 'Chanson marteau')}
      ${link(R2, 5, 'Son demarage marteau')}
    </td>
    <td>   
      <button class="btn btn-outline-primary btn-sm" href="" onclick="NouvellePiece()"> Nouvelle piece</button>
      <button class="btn btn-outline-primary btn-sm" href="" onclick="JumpScare()">Jumpscare</button>
      <button class="btn btn-outline-primary btn-sm" href="" onclick="VictoryGauche()">Victoire gauche</button>
      <button class="btn btn-outline-primary btn-sm" href="" onclick="VictoryDroite()">Victoire Droite</button>
    </td>
    <td>
      ${link(R3, 1, 'Chanson marteau')}
      ${link(R3, 5, 'Son demarage marteau')}
    </td>
    <td>
      ${link(R1, 0, 'Video Intro')}
      ${link(R1, 1, 'Video clown bonus')}
      ${link(R1, 2, 'Video 3 Trou valide')}

      ${link(R1, 5, 'Son Rire Clown')}
      ${link(R1, 6, 'Son gain(TADA)')}
      ${link(R1, 7, 'Son Victoire(TA....)')}

      ${link(R1, 3, 'Video FINAL 1')}
      ${link(R1, 4, 'Video FINAL 1')}
    </td>
  </tr>
    
  <tr>
    <td>RESULTAT MARTEAU Gauche</td>
    <td></td>
    <td>RESULTAT MARTEAU Droite</td>
    <td></td>
  </tr>
  <tr>
    <td><br />
      ${link(R2, 'marteau/bon', 'BON')}
      ${link(R2, 'marteau/mauvais', 'mauvais')}
      ${linkR2scores}
    </td>
    <td></td>
    <td>
      <br />
      ${link(R3, 'marteau/bon', 'BON')}
      ${link(R3, 'marteau/mauvais', 'mauvais')}
      ${linkR3scores}
    </td>
    </tr>
  </table>
`;

render(helloTemplate('World'), document.body);
