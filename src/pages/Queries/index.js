import ComponentA from '../../components/TestComponent/ComponentA';
import ComponentB from '../../components/TestComponent/ComponentB';
import ComponentC from '../../components/TestComponent/ComponentC';

const Queries = () => {
  return (
    <div className="Queries">
      <div className="Queries__top mb--16">
        <ComponentA />
        <ComponentB />
      </div>
      <ComponentC />
    </div>
  );
};

export default Queries;
