import { query } from "express";
import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class createCompliments1624571269542 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "compliments",
        columns: [
          {
            name: "id",
            type: "varchar",
            isPrimary: true,
          },
          {
            name: "user_sender",
            type: "varchar",
          },
          {
            name: "user_receiver",
            type: "varchar",
          },
          {
            name: "tag_id",
            type: "varchar",
          },
          {
            name: "message",
            type: "varchar",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "CURRENT_TIMESTAMP",
          },
          {
            name: "updated_at",
            type: "timestamp",
            default: 0,
          },
        ],
        foreignKeys: [
          {
            name: "FK_USER_SENDER_COMPLIMENTS", // nome da fl
            referencedTableName: "users", // tabela referenciada
            referencedColumnNames: ["id"], // coluna da tabela referenciada
            columnNames: ["user_sender"], // coluna que vai relacionar essa tabela com a tabela referenciada
            onDelete: "CASCADE",
            onUpdate: "CASCADE"
          },
          {
            name: "FK_USER_RECEIVER_COMPLIMENTS", // nome da fl
            referencedTableName: "users", // tabela referenciada
            referencedColumnNames: ["id"], // coluna da tabela referenciada
            columnNames: ["user_receiver"], // coluna que vai relacionar essa tabela com a tabela referenciada
            onDelete: "CASCADE",
            onUpdate: "CASCADE"
          },
          {
            name: "FK_TAG_COMPLIMENTS", // nome da fl
            referencedTableName: "tags", // tabela referenciada
            referencedColumnNames: ["id"], // coluna da tabela referenciada
            columnNames: ["tag_id"], // coluna que vai relacionar essa tabela com a tabela referenciada
            onDelete: "CASCADE",
            onUpdate: "CASCADE"
          },
        ],
      })
    );
    // Outra forma de criar foreignKeys
    // await queryRunner.createForeignKey(
    //     "compliments",
    //     new TableForeignKey({
    //         name: "FK_USER_SENDER_COMPLIMENTS", // nome da fl
    //         referencedTableName: "users", // tabela referenciada
    //         referencedColumnNames: ["id"], // coluna da tabela referenciada
    //         columnNames: ["user_sender"], // coluna que vai relacionar essa tabela com a tabela referenciada
    //         onDelete: "SET NULL",
    //         onUpdate: "CASCADE"
    //     })
    // )
  }


  public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable("compliments")
  }
}
