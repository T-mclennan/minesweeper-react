class Game extends React.Component {
  state = {
    height: 12,
    width: 12,
    mines: 100,
  };
  render() {
    const { height, width, mines } = this.state;
    return (
      <div className='game'>
        <Board height={height} width={width} mines={mines} />
      </div>
    );
  }
}
