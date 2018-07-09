// @flow
import renderApp from '../App'

// it('should render state into view', () => {
//     let html = renderApp({name: 'Budi', counter: 11});
//     expect(html).toEqual(`<p>Hello 11!</p>
//             <button onClick="emitEvent('increaseCount')">Increase</button>
//             <button onClick="emitEvent('decreaseCount')">Decrease</button>`);
// })

it('should render state into view', () => {
    let html = renderApp({toDoItems:[{id: 4, name: 'Budi', isDone: false}]});
    expect(html).toEqual(`<p>Hello 11!</p>
            <button onClick="emitEvent('increaseCount')">Increase</button>
            <button onClick="emitEvent('decreaseCount')">Decrease</button>`);
})