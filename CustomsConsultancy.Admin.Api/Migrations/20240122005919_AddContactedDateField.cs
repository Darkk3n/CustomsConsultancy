using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CustomsConsultancy.Admin.Api.Migrations
{
    /// <inheritdoc />
    public partial class AddContactedDateField : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<DateTime>(
                name: "DateContacted",
                table: "PotentialClients",
                type: "TEXT",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "DateContacted",
                table: "PotentialClients");
        }
    }
}
