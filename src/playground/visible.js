let visibility = false;
const onClickDetails = () => {
  visibility = !visibility;
  render();
};

const render = () => {
  const template = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={onClickDetails}>{visibility ? 'Hide details' : 'Show details'}</button>
      {
        visibility &&
        <p>Hey. These are some details you can now see!</p>
      }
    </div>
  );

  const targetRender = document.getElementById('app2');
  ReactDOM.render(template, targetRender);
};

render();
