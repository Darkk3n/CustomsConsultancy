using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CustomsConsultancy.Admin.Api.Migrations
{
    /// <inheritdoc />
    public partial class ModifyFieldsCourseTable : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<bool>(
                name: "Status",
                table: "Course",
                type: "INTEGER",
                maxLength: 20,
                nullable: true,
                oldClrType: typeof(string),
                oldType: "TEXT",
                oldMaxLength: 20,
                oldNullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "DateDue",
                table: "Course",
                type: "TEXT",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "DateDue",
                table: "Course");

            migrationBuilder.AlterColumn<string>(
                name: "Status",
                table: "Course",
                type: "TEXT",
                maxLength: 20,
                nullable: true,
                oldClrType: typeof(bool),
                oldType: "INTEGER",
                oldMaxLength: 20,
                oldNullable: true);
        }
    }
}
