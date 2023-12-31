// 
// THIS FILE HAS BEEN GENERATED AUTOMATICALLY
// DO NOT CHANGE IT MANUALLY UNLESS YOU KNOW WHAT YOU'RE DOING
// 
// GENERATED USING @colyseus/schema 2.0.25
// 

using Colyseus.Schema;
using Action = System.Action;

namespace DTWorldz.Networking.ServerSchema {
	public partial class Attacking : Schema {
		[Type(0, "number")]
		public float power = default(float);

		[Type(1, "number")]
		public float swingSpeed = default(float);

		[Type(2, "number")]
		public float range = default(float);

		[Type(3, "number")]
		public float cooldown = default(float);

		[Type(4, "number")]
		public float cooldownTimer = default(float);

		[Type(5, "boolean")]
		public bool isAttacking = default(bool);

		/*
		 * Support for individual property change callbacks below...
		 */

		protected event PropertyChangeHandler<float> __powerChange;
		public Action OnPowerChange(PropertyChangeHandler<float> __handler, bool __immediate = true) {
			if (__callbacks == null) { __callbacks = new SchemaCallbacks(); }
			__callbacks.AddPropertyCallback(nameof(this.power));
			__powerChange += __handler;
			if (__immediate && this.power != default(float)) { __handler(this.power, default(float)); }
			return () => {
				__callbacks.RemovePropertyCallback(nameof(power));
				__powerChange -= __handler;
			};
		}

		protected event PropertyChangeHandler<float> __swingSpeedChange;
		public Action OnSwingSpeedChange(PropertyChangeHandler<float> __handler, bool __immediate = true) {
			if (__callbacks == null) { __callbacks = new SchemaCallbacks(); }
			__callbacks.AddPropertyCallback(nameof(this.swingSpeed));
			__swingSpeedChange += __handler;
			if (__immediate && this.swingSpeed != default(float)) { __handler(this.swingSpeed, default(float)); }
			return () => {
				__callbacks.RemovePropertyCallback(nameof(swingSpeed));
				__swingSpeedChange -= __handler;
			};
		}

		protected event PropertyChangeHandler<float> __rangeChange;
		public Action OnRangeChange(PropertyChangeHandler<float> __handler, bool __immediate = true) {
			if (__callbacks == null) { __callbacks = new SchemaCallbacks(); }
			__callbacks.AddPropertyCallback(nameof(this.range));
			__rangeChange += __handler;
			if (__immediate && this.range != default(float)) { __handler(this.range, default(float)); }
			return () => {
				__callbacks.RemovePropertyCallback(nameof(range));
				__rangeChange -= __handler;
			};
		}

		protected event PropertyChangeHandler<float> __cooldownChange;
		public Action OnCooldownChange(PropertyChangeHandler<float> __handler, bool __immediate = true) {
			if (__callbacks == null) { __callbacks = new SchemaCallbacks(); }
			__callbacks.AddPropertyCallback(nameof(this.cooldown));
			__cooldownChange += __handler;
			if (__immediate && this.cooldown != default(float)) { __handler(this.cooldown, default(float)); }
			return () => {
				__callbacks.RemovePropertyCallback(nameof(cooldown));
				__cooldownChange -= __handler;
			};
		}

		protected event PropertyChangeHandler<float> __cooldownTimerChange;
		public Action OnCooldownTimerChange(PropertyChangeHandler<float> __handler, bool __immediate = true) {
			if (__callbacks == null) { __callbacks = new SchemaCallbacks(); }
			__callbacks.AddPropertyCallback(nameof(this.cooldownTimer));
			__cooldownTimerChange += __handler;
			if (__immediate && this.cooldownTimer != default(float)) { __handler(this.cooldownTimer, default(float)); }
			return () => {
				__callbacks.RemovePropertyCallback(nameof(cooldownTimer));
				__cooldownTimerChange -= __handler;
			};
		}

		protected event PropertyChangeHandler<bool> __isAttackingChange;
		public Action OnIsAttackingChange(PropertyChangeHandler<bool> __handler, bool __immediate = true) {
			if (__callbacks == null) { __callbacks = new SchemaCallbacks(); }
			__callbacks.AddPropertyCallback(nameof(this.isAttacking));
			__isAttackingChange += __handler;
			if (__immediate && this.isAttacking != default(bool)) { __handler(this.isAttacking, default(bool)); }
			return () => {
				__callbacks.RemovePropertyCallback(nameof(isAttacking));
				__isAttackingChange -= __handler;
			};
		}

		protected override void TriggerFieldChange(DataChange change) {
			switch (change.Field) {
				case nameof(power): __powerChange?.Invoke((float) change.Value, (float) change.PreviousValue); break;
				case nameof(swingSpeed): __swingSpeedChange?.Invoke((float) change.Value, (float) change.PreviousValue); break;
				case nameof(range): __rangeChange?.Invoke((float) change.Value, (float) change.PreviousValue); break;
				case nameof(cooldown): __cooldownChange?.Invoke((float) change.Value, (float) change.PreviousValue); break;
				case nameof(cooldownTimer): __cooldownTimerChange?.Invoke((float) change.Value, (float) change.PreviousValue); break;
				case nameof(isAttacking): __isAttackingChange?.Invoke((bool) change.Value, (bool) change.PreviousValue); break;
				default: break;
			}
		}
	}
}
