import P_EOBJ002_Types from "./EOBJ001_Types";

/**
 * Used as a parent model for all the entities in the game
 *
 * @abstract
 * @class EOBJ001
 */
export default abstract class EOBJ001 {
  id: string;
  name?: string;
  health?: number;
  inventory?: string;
  position?: P_EOBJ002_Types["pos"];

  /**
   * Creates an instance of EOBJ001.
   * @param {string} id
   * @memberof EOBJ001
   */
  constructor(id: string) {
    this.id = id;
  }

  /**
   * A function for an action the entity takes whenever it is interacted with.
   * @abstract
   * @return {*}  {null}
   * @memberof EOBJ001
   */
  abstract action(params: any): void;

  /**
   * A function for an action the entity takes whenever it is interacted with talk().
   * @abstract
   * @return {*}  {null}
   * @memberof EOBJ001
   */
  abstract dialogue(params: any): void;
}
