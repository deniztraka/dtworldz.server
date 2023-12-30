// 
// THIS FILE HAS BEEN GENERATED AUTOMATICALLY
// DO NOT CHANGE IT MANUALLY UNLESS YOU KNOW WHAT YOU'RE DOING
// 
// GENERATED USING @colyseus/schema 2.0.25
// 

using Colyseus.Schema;
using Action = System.Action;

namespace DTWorldz.Networking.ServerSchema {
	public partial class Health : Schema {
		[Type(0, "number")]
		public float currentValue = default(float);

		[Type(1, "number")]
		public float maxValue = default(float);

		/*
		 * Support for individual property change callbacks below...
		 */

		protected event PropertyChangeHandler<float> __currentValueChange;
		public Action OnCurrentValueChange(PropertyChangeHandler<float> __handler, bool __immediate = true) {
			if (__callbacks == null) { __callbacks = new SchemaCallbacks(); }
			__callbacks.AddPropertyCallback(nameof(this.currentValue));
			__currentValueChange += __handler;
			if (__immediate && this.currentValue != default(float)) { __handler(this.currentValue, default(float)); }
			return () => {
				__callbacks.RemovePropertyCallback(nameof(currentValue));
				__currentValueChange -= __handler;
			};
		}

		protected event PropertyChangeHandler<float> __maxValueChange;
		public Action OnMaxValueChange(PropertyChangeHandler<float> __handler, bool __immediate = true) {
			if (__callbacks == null) { __callbacks = new SchemaCallbacks(); }
			__callbacks.AddPropertyCallback(nameof(this.maxValue));
			__maxValueChange += __handler;
			if (__immediate && this.maxValue != default(float)) { __handler(this.maxValue, default(float)); }
			return () => {
				__callbacks.RemovePropertyCallback(nameof(maxValue));
				__maxValueChange -= __handler;
			};
		}

		protected override void TriggerFieldChange(DataChange change) {
			switch (change.Field) {
				case nameof(currentValue): __currentValueChange?.Invoke((float) change.Value, (float) change.PreviousValue); break;
				case nameof(maxValue): __maxValueChange?.Invoke((float) change.Value, (float) change.PreviousValue); break;
				default: break;
			}
		}
	}
}
