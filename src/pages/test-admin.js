import React from 'react';
import Helmet from 'react-helmet';

// class CategoriesControl extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleChange = this.handleChange.bind(this);
//   }
//
//   handleChange(e) {
//     this.props.onChange(e.target.value.split(',').map(e => e.trim()));
//   }
//
//   render() {
//     const { value } = this.props;
//     return <input onChange={this.handleChange} type="text" value={value ? value.join(', ') : ''} />;
//   }
// }
//
// class CategoriesPreview extends React.Component {
//   render() {
//     const { value } = this.props;
//     return (
//       <ul>
//         {value.map((val, index) =>
//           <li key={index}>
//             {val}
//           </li>
//         )}
//       </ul>
//     );
//   }
// }

class Admin extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Content Manager</title>
          <link rel="stylesheet" href="https://unpkg.com/netlify-cms@~0.4/dist/cms.css" />
        </Helmet>
        <div>
          <script src="https://unpkg.com/netlify-cms@~0.4/dist/cms.js" />
        </div>
      </div>
    );
  }
}

export default Admin;
