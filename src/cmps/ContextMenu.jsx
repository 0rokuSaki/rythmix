import { DeleteIcon } from "./icons/DeleteIcon";
import { EditIcon } from "./icons/EditIcon";

export function ContextMenu({ x, y, onEdit, onRemove }) {

    const contextMenuStyle = {
      position: 'absolute',
      top: `${y}px`,
      left: `${x}px`,
      zIndex: 1000,
    };
  
    return (
      <div style={contextMenuStyle} className="context-menu">
        <ul>
            <div className="edit-item">
                <EditIcon />
                <li onClick={onEdit}>Edit details</li>
            </div>
            <div className="delete-item">
                <DeleteIcon />
                <li onClick={onRemove}>Delete</li>
            </div>
        </ul>
      </div>
    );
  }
  