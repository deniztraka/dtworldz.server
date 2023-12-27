// 
// THIS FILE HAS BEEN GENERATED AUTOMATICALLY
// DO NOT CHANGE IT MANUALLY UNLESS YOU KNOW WHAT YOU'RE DOING
// 
// GENERATED USING @colyseus/schema 2.0.25
// 

using Colyseus.Schema;
using Action = System.Action;

namespace DTWorldz.Networking.ServerSchema {
	public partial class BaseMobileSchema : Schema {
		[Type(0, "string")]
		public string sessionId = default(string);

		[Type(1, "string")]
		public string name = default(string);

		[Type(2, "number")]
		public float speed = default(float);

		[Type(3, "boolean")]
		public bool isRunning = default(bool);

		[Type(4, "boolean")]
		public bool isMoving = default(bool);

		[Type(5, "ref", typeof(Position))]
		public Position position = new Position();

		[Type(6, "number")]
		public float tick = default(float);

		/*
		 * Support for individual property change callbacks below...
		 */

		protected event PropertyChangeHandler<string> __sessionIdChange;
		public Action OnSessionIdChange(PropertyChangeHandler<string> __handler, bool __immediate = true) {
			if (__callbacks == null) { __callbacks = new SchemaCallbacks(); }
			__callbacks.AddPropertyCallback(nameof(this.sessionId));
			__sessionIdChange += __handler;
			if (__immediate && this.sessionId != default(string)) { __handler(this.sessionId, default(string)); }
			return () => {
				__callbacks.RemovePropertyCallback(nameof(sessionId));
				__sessionIdChange -= __handler;
			};
		}

		protected event PropertyChangeHandler<string> __nameChange;
		public Action OnNameChange(PropertyChangeHandler<string> __handler, bool __immediate = true) {
			if (__callbacks == null) { __callbacks = new SchemaCallbacks(); }
			__callbacks.AddPropertyCallback(nameof(this.name));
			__nameChange += __handler;
			if (__immediate && this.name != default(string)) { __handler(this.name, default(string)); }
			return () => {
				__callbacks.RemovePropertyCallback(nameof(name));
				__nameChange -= __handler;
			};
		}

		protected event PropertyChangeHandler<float> __speedChange;
		public Action OnSpeedChange(PropertyChangeHandler<float> __handler, bool __immediate = true) {
			if (__callbacks == null) { __callbacks = new SchemaCallbacks(); }
			__callbacks.AddPropertyCallback(nameof(this.speed));
			__speedChange += __handler;
			if (__immediate && this.speed != default(float)) { __handler(this.speed, default(float)); }
			return () => {
				__callbacks.RemovePropertyCallback(nameof(speed));
				__speedChange -= __handler;
			};
		}

		protected event PropertyChangeHandler<bool> __isRunningChange;
		public Action OnIsRunningChange(PropertyChangeHandler<bool> __handler, bool __immediate = true) {
			if (__callbacks == null) { __callbacks = new SchemaCallbacks(); }
			__callbacks.AddPropertyCallback(nameof(this.isRunning));
			__isRunningChange += __handler;
			if (__immediate && this.isRunning != default(bool)) { __handler(this.isRunning, default(bool)); }
			return () => {
				__callbacks.RemovePropertyCallback(nameof(isRunning));
				__isRunningChange -= __handler;
			};
		}

		protected event PropertyChangeHandler<bool> __isMovingChange;
		public Action OnIsMovingChange(PropertyChangeHandler<bool> __handler, bool __immediate = true) {
			if (__callbacks == null) { __callbacks = new SchemaCallbacks(); }
			__callbacks.AddPropertyCallback(nameof(this.isMoving));
			__isMovingChange += __handler;
			if (__immediate && this.isMoving != default(bool)) { __handler(this.isMoving, default(bool)); }
			return () => {
				__callbacks.RemovePropertyCallback(nameof(isMoving));
				__isMovingChange -= __handler;
			};
		}

		protected event PropertyChangeHandler<Position> __positionChange;
		public Action OnPositionChange(PropertyChangeHandler<Position> __handler, bool __immediate = true) {
			if (__callbacks == null) { __callbacks = new SchemaCallbacks(); }
			__callbacks.AddPropertyCallback(nameof(this.position));
			__positionChange += __handler;
			if (__immediate && this.position != null) { __handler(this.position, null); }
			return () => {
				__callbacks.RemovePropertyCallback(nameof(position));
				__positionChange -= __handler;
			};
		}

		protected event PropertyChangeHandler<float> __tickChange;
		public Action OnTickChange(PropertyChangeHandler<float> __handler, bool __immediate = true) {
			if (__callbacks == null) { __callbacks = new SchemaCallbacks(); }
			__callbacks.AddPropertyCallback(nameof(this.tick));
			__tickChange += __handler;
			if (__immediate && this.tick != default(float)) { __handler(this.tick, default(float)); }
			return () => {
				__callbacks.RemovePropertyCallback(nameof(tick));
				__tickChange -= __handler;
			};
		}

		protected override void TriggerFieldChange(DataChange change) {
			switch (change.Field) {
				case nameof(sessionId): __sessionIdChange?.Invoke((string) change.Value, (string) change.PreviousValue); break;
				case nameof(name): __nameChange?.Invoke((string) change.Value, (string) change.PreviousValue); break;
				case nameof(speed): __speedChange?.Invoke((float) change.Value, (float) change.PreviousValue); break;
				case nameof(isRunning): __isRunningChange?.Invoke((bool) change.Value, (bool) change.PreviousValue); break;
				case nameof(isMoving): __isMovingChange?.Invoke((bool) change.Value, (bool) change.PreviousValue); break;
				case nameof(position): __positionChange?.Invoke((Position) change.Value, (Position) change.PreviousValue); break;
				case nameof(tick): __tickChange?.Invoke((float) change.Value, (float) change.PreviousValue); break;
				default: break;
			}
		}
	}
}
