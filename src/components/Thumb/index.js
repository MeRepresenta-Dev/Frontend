import React from 'react';


class Thumb extends React.Component {
  
  state = {
    loading: false,
    thumb: undefined,
  };

  componentWillReceiveProps(nextProps) {
    if (!nextProps.file) { return; }

    this.setState({ loading: true }, () => {
      let reader = new FileReader();

      reader.onloadend = () => {
        this.setState({ loading: false, thumb: reader.result });
      };

      reader.readAsDataURL(nextProps.file);
    });
  }

  render() {
    const { file } = this.props;
    const { loading, thumb } = this.state;

    if (!file) { return <div className="candidatePhoto"><span>Inserir foto de candidatura</span></div>; }

    if (loading) { return <p>loading...</p>; }

    return (
      <img src={thumb}
        alt={file.name}
        className="img-thumbnail mt-2"
        width="200"
      />);
  }
}

export default Thumb