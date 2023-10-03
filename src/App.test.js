import { render } from '@testing-library/react';
import DogDetails from './DogDetails';
import Router from "react-router";
Router.useParams = jest.fn();


test('renders learn react link', () => {
  Router.useParams.mockReturnValue({a: "b"});	
  render(<DogDetails />)
});
