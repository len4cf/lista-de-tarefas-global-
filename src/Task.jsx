import Checkbox from "./Checkbox";

export default function Task({name,done,onToggle,onTrash}) {
  return (
    <div className={'task ' + (done?'done':'')}>
        <div className="task-name" onClick={() => setEditMode(prev => !prev)}>
          <span>{name}</span>
        </div>
    </div>
  );
}